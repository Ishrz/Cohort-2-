import Card from './Card'
function Cards({members,removeFormData}){
    return(
        <>
        <div className="cards-container  rounded-2xl w-4/6 h-80 p-10 mt-15 mb-10  mx-auto flex justify-center items-center gap-3 flex-wrap overflow-auto ">

            {members.map((elem,index)=> <Card key={index} elem={elem} removeFormData={removeFormData} index={index} /> )}
           
        </div>
        </>
    )
}

export default Cards