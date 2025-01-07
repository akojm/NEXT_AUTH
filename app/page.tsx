
"use client"
import { signIn, useSession } from "next-auth/react";


export default function Home() {
  const {data:session} = useSession();
  if (session) {
    console.log(session);
    
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <h1 className="text-8xl text-black text-center uppercase font-black " >Next Auth</h1>
         <button onClick={(() => signIn('github'))}  className="bg-gray-300 hover:bg-gray-400 rounded-md p-3" >
         
          se connecter avec Github
          </button>  
      </main> 
    </div>
  );
}
