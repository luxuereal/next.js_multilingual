import prisma from 'lib/prisma'
import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest, res: NextResponse) {
    // const { username, email, password } = req.body;
    try {
        const result = await prisma.post.create({
            data: {
                name: req.headers.get('name'),
                email:  req.headers.get('email'),
                password: req.headers.get('password')
            },
        });
        const response = new NextResponse(null, { status: 200 });
        response.headers.set('result', result.json());
        return response;
    } catch (err:any) {
        return new NextResponse(err.message, {
            status: 500,
        });
    }
}