import { prisma } from "@/prisma";

async function getusers() {
    try {
        return await prisma.user.findMany();

    } catch (error) {
        console.log(error);
    }
}


export default async function Page() {
    const users = await getusers();


    return (
        <>
            <div className="w-[100dvw] justify-center gap-2 md:flex md:flex-wrap items-center " >

                {users &&
                    users.map((user) => (
                        <div className=" bg-primary-200 md:w-1/4 pl-4  items-center justify-between pr-4   flex h-16 text-secondry-100  mt-3 rounded-md" key={user.id}>

                            <div className="" >
                                <h1 className="text-xl font-serif  font-extrabold " >{user.username}</h1>
                                <p className="text-xs font-thin "  >{user.email}</p>
                            </div>
                                <p className="text-xs font-medium text-secondry-200 "  >{user.role}</p>
                        </div>
                    ))
                }

            </div>
        </>
    )
}