import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const filePath = path.resolve(process.cwd(), 'src/data/tasks.json');

function setCorsHeaders(response) {
    response.headers.set('Access-Control-Allow-Origin', 'http://localhost:5173');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
}

export async function OPTIONS() {
    const response = new NextResponse(null, { status: 204 });
    setCorsHeaders(response);
    return response;
}

export async function GET() {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const tasks = JSON.parse(data);
        const response = NextResponse.json(tasks);
        setCorsHeaders(response);
        return response;
    } catch (error) {
        console.error("Error reading tasks:", error);
        const response = NextResponse.json({ error: 'Failed to read tasks' }, { status: 500 });
        setCorsHeaders(response);
        return response;
    }
}

export async function POST(req) {
    try {
        const { texto, hora, periodo, completado } = await req.json();
        const id = uuidv4();
        const newTask = { id, texto, hora, periodo, completado };

        const data = await fs.readFile(filePath, 'utf8');
        const tasks = JSON.parse(data);

        const updatedTasks = [...tasks, newTask];
        await fs.writeFile(filePath, JSON.stringify(updatedTasks, null, 2));

        const response = NextResponse.json(newTask, { status: 201 });
        setCorsHeaders(response);
        return response;
    } catch (error) {
        console.error("Error adding task:", error);
        const response = NextResponse.json({ error: 'Failed to add task' }, { status: 500 });
        setCorsHeaders(response);
        return response;
    }
}
