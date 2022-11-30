import NavElements from "./navbar/navElements"

export default function Navbar(){

    return (<>
        <div className="flex justify-between items-center max-w-none sm:max-w-8xl mx-auto w-full sm:w-11/12 p-9">
            <div>
                <h1 className="font-sans text-white font-semibold text-2xl">nyde<span className="text-primary">.live</span></h1>
            </div>
            <div className="flex items-center space-x-5">
                <NavElements/>
            </div>
        </div>
    </>)

}