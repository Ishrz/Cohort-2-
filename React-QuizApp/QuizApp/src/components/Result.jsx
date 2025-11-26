const Result=({currentScore})=>{
    return(
        <>
        <div className="flex flex-col gap-4 items-center">
        <h1 className="text-green-600">Your Total Score <br/> {currentScore}</h1>
        </div>
        </>
    )
}

export default Result