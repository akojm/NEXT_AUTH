
"use client"
import { signIn, useSession } from "next-auth/react";


export default function Home() {
  const {data:session} = useSession();
  if (session) {
    console.log(session);
    
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-1  row-start-2 items-center sm:items-start">
       <h1 className="text-8xl text-black text-center uppercase font-black " >Next Auth</h1>
        <div className="mb-5" >
        <p className="text-sm text-gray-500">Connectez-vous avec votre compte Github ou Google pour démarrer votre application Next Auth.</p> 
        <p className="text-sm text-gray-500">Cette application utilise Next Auth pour vous connecter avec des fournisseurs d&apos;authentification.</p> 
        <p className="text-sm text-gray-500">Les informations de connexion sont stockées en local et ne sont pas envoyées à un serveur.</p> 
        <p className="text-sm text-gray-500">Pour plus d&apos;informations sur Next Auth, visitez le site officiel : <a href="https://next-auth.js.org/" target="_blank" rel="noopener noreferrer">next-auth.js.org</a></p>
        </div>
      
       <div className="flex align-center justify-items-center gap-4 " >
        <button onClick={(() => signIn('github'))}  className="bg-gray-300 hover:bg-gray-400 rounded-md p-3" >      
          se connecter avec Github
          </button>  
         <button onClick={(() => signIn('google'))}  className="bg-gray-300 hover:bg-gray-400 rounded-md p-3" >      
          se connecter avec Google
          </button>
       </div>
           
      </main> 
    </div>
  );
}
