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
       <div className="w-[100dvw] justify-center flex items-center " >
  
      {users &&
            users.map((user) => (
                <div className="w-[98%] h-16 text-white  bg-slate-800 mt-3" key={user.id}>
                    <h1>{user.username}</h1>
                    <p>{user.email}</p>
                </div>
            ))
        }
      
       </div>
        </>
    )
}