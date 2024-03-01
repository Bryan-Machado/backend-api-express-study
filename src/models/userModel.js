import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getAll = async () => {
    return await prisma.user.findMany()
}

const getById = async (id) => {
    return await prisma.user.findUnique({
        where: {
            id: id
        }
    })
}

const createUser = async (userObject) => {
    return await prisma.user.create({
        data: userObject
    })
}

const updateById = async (id, newUserObject) => {
    return await prisma.user.update({
        data:  newUserObject,
        where: {
            id
        }
    })
}

const deleteById = async (id) => {
    return await prisma.user.delete({
        where: {
            id
        }
    })
}

export default {getAll, getById, createUser, updateById, deleteById}