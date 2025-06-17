import UserCard from "@/components/UserCard"

const AdminPage = () => {
    return (
        
             
            <div className= "p-4 flex gap-4 flex-col md:flex-row">
                {/* {LEFTSIDE} */}
                <div className="w-full lg:w-2/3 ">
                    {/* USER CARDS */}
                    <div className="flex gap-4 justify-between flex-wrap" >
                        <UserCard type="student"/>
                        <UserCard type="profesor"/>
                        <UserCard type="parent"/>
                        <UserCard type="stuff"/>
                    </div>
                </div>

                {/* RIGHTSIDE */}
                <div className="w-full lg:w0-1/3 ">R</div>
            </div>

           
      
    )
}

export default AdminPage
