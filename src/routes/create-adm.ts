import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";

export async function createAdm(app: FastifyInstance) {
    app
        .withTypeProvider<ZodTypeProvider>()
        .post('/administrators', {
            schema: {
                summary: 'Create an adm',
                tags: ['administrators'],
                body: z.object({
                    email: z.string().email(),
                    password: z.string().min(8, 'The password must be at least 8 characters long'),
                    confirmPassword: z.string()
                }).refine((field) => field.password === field.confirmPassword, {
                    path: ['confirmPassword'],
                    message: 'Passwords must be the same'
                }),
                response: {
                    201: z.object({
                        message: z.string()
                    })
                }
            }
        }, async(request, reply) => {
            const {
                email,
                password,
                confirmPassword
            } = request.body;


        })
}