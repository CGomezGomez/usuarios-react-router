import { useParams , useNavigate } from "react-router-dom";
import { StyledContainer } from "./styles";
import { USERS } from "../../constants/users"


const User = () => {
    const navigate          = useNavigate();
    const { userId }        = useParams();
    const user = USERS.find(user => user.userId === userId);


    return(
        <>
              
              <StyledContainer>
                  <button onClick={() => navigate('/')}>Back to users</button>
                  <img src={user.profileImage} alt='' />
                  <h1>Hi! my name is {user.name}</h1>
                  <p>I'm: {user.age} years old</p>
                  <p>My username is {user.username}</p>
                  <p>You can contact me in {user.email}</p>
                  <p>My Adress is:</p>
                  <p>{user.address.street}</p>
                  <p>{user.address.city}</p>
                  <p>{user.address.zipCode}</p>
                  <p>You can call me at {user.phone}</p>
              </StyledContainer>
        
        </>
        
    )
}

export default User;