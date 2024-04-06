function UncontrolledLogin(){
    function handleSubmit(e){
        e.preventDefault()
        // const username = e.target.elements.namedItem("username").value
        // const password = e.target.elements.namedItem("password").value
        // const session = e.target.elements.namedItem("session").checked

        // const data ={
        //     username,
        //     password,
        //     session,
        // }
        // console.log(data);
        const formData = new FormData(e.target)
        const data = {
            username: formData.get("username"),
            password: formData.get("password"),
            session: formData.get("session") === "on" ? true : false
        }
            
            console.log(data);


        }

    
    return( 
         <>
         <h1>Uncontrolled Forms</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="username"/>
        <input type="password" name="password" placeholder="password"/>
        <input type="checkbox" name="session"/>
        <button>Invia</button>


        </form>
        </>
    )
}
export default UncontrolledLogin