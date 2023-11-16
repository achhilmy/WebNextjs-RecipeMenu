import Image from "../../../../node_modules/next/image";
import Link from "../../../../node_modules/next/link";

export default function HomePage(){
    return (
        <main className="flex min-h-screen flex-col items-center">
            <h1>this is Welcome to home page</h1>
            <Link href='/'>go to home</Link>
        </main>
    )
}