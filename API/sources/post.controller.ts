import { Request, Response } from 'express'

// DB
//import { connect } from '../database'
// Interfaces
import { Post } from './Post'

export async function getPosts(req: Request, res: Response): Promise<Response | void> {
    try {
        console.log("hola");
        /*const conn = await connect();
        const posts = await conn.query('SELECT * FROM posts');
        return res.json(posts[0]);*/
    }
    catch (e) {
        console.log(e)
    }
}

export async function createPost(req: Request, res: Response) {
    const newPost: Post = req.body;
    /*const conn = await connect();
    await conn.query('INSERT INTO posts SET ?', [newPost]);*/
    res.json({
        message: 'New Post Created'
    });
}