import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const filePath = path.resolve(process.cwd(), 'src/data/tasks.json');

function setCorsHeaders(response) {
    response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5173');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
}

export async function OPTIONS(request) {
    const response = new NextResponse(null, {
        status: 204,
    });
    setCorsHeaders(response);
    return response;
}

export async function GET({ params }) {
    try {
        const taskId = params.id;
        const data = await fs.readFile(filePath, 'utf8');
        const tasks = JSON.parse(data);
        const task = tasks.find(task => task.id === taskId);

        if (!task) {
            return NextResponse.json({ error: 'Task not found' }, { status: 404 });
        }

        const response = NextResponse.json(task);
        setCorsHeaders(response);
        return response;
    } catch (error) {
        console.error("Error reading task:", error);
        return NextResponse.json({ error: 'Failed to read task' }, { status: 500 });
    }
}

export async function PUT(req, { params }) {
    try {
        const taskId = params.id;
        const updatedTask = await req.json();

        const data = await fs.readFile(filePath, 'utf8');
        const tasks = JSON.parse(data);

        const taskIndex = tasks.findIndex(task => task.id === taskId);

        if (taskIndex === -1) {
            return NextResponse.json({ error: 'Task not found' }, { status: 404 });
        }

        tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };

        await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));

        const response = NextResponse.json(tasks[taskIndex]);
        setCorsHeaders(response);
        return response;
    } catch (error) {
        console.error("Error updating task:", error);
        return NextResponse.json({ error: 'Failed to update task' }, { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    try {
        const taskId = params.id;

        const data = await fs.readFile(filePath, 'utf8');
        const tasks = JSON.parse(data);

        const initialLength = tasks.length;
        const updatedTasks = tasks.filter(task => task.id !== taskId);

        if (updatedTasks.length === initialLength) {
            return NextResponse.json({ error: 'Task not found' }, { status: 404 });
        }

        await fs.writeFile(filePath, JSON.stringify(updatedTasks, null, 2));

        const response = NextResponse.json({ message: `Task with id ${taskId} deleted successfully` });
        setCorsHeaders(response);
        return response;
    } catch (error) {
        console.error("Error deleting task:", error);
        return NextResponse.json({ error: 'Failed to delete task' }, { status: 500 });
    }
}