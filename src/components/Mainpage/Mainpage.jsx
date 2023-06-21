import { useNavigate } from 'react-router-dom';
import { USERS } from '../../constants/users';
import { useState } from 'react';
import {StyledActive, StyledButton, StyledCheckbox, StyledContainer, StyledRight, StyledConCheckBox, StyledContainerInput,  StyledH2, StyledImage, StyledContainerLeft, StyledUser, StyledInput,StyledValue, StyledContainerValue, StyledText
} from './styles';

const MainPage = () => {
	const navigate = useNavigate();
	const [active, setActive] = useState(false);
	const [ find , setFind ]  = useState('');
	const [ option , setOption ] = useState('0');
	let 
		usersFiltered = filterByOnlyActive(active);
		usersFiltered = filterText( find , usersFiltered );
		usersFiltered = filterOption ( option, usersFiltered );

	return (
		<StyledContainer>
			<h1>Listado de usuarios</h1>
			<StyledContainerInput>
                    <StyledInput onChange={(e) => setFind(e.target.value)}/>

                    <StyledConCheckBox>
                        <StyledH2>Sólo activos:</StyledH2>
                        <StyledCheckbox 
						type='checkbox'
						value={active}  
						onClick={(e) =>{setActive(e.target.checked)
						}}
				
						/>
                    </StyledConCheckBox>

                    <StyledContainerValue onChange={(e) => setOption(e.target.value)}>

                        <StyledValue value='0'>
							Por defecto
						</StyledValue>
                        <StyledValue value='1'>
							Por nombre
						</StyledValue>

                    </StyledContainerValue>

			</StyledContainerInput>

			{usersFiltered.map(user => (
				<StyledUser key={user.userId}>

					<StyledContainerLeft>

						<StyledImage src={user.profileImage} />
						<StyledText>
							<h3>{user.name}</h3>
							<StyledH2>@{user.username}</StyledH2>
						</StyledText>

					</StyledContainerLeft>

					<StyledRight>

						<StyledActive 
                            active={user.active}>
							{user.active ? 'Activo' : 'Inactivo'}
						</StyledActive>
						<StyledButton 
                            onClick={() => navigate(`/user/${user.userId}`)}>
							Ver Detalles
						</StyledButton>

					</StyledRight>

				</StyledUser>
			))}

		</StyledContainer>
	);

	
};

const filterByOnlyActive = active => {

	if(active) return USERS.filter(user => user.active);
	return USERS;
}

const filterText = ( find , usersFiltered ) => {
	if ( find !== '' ) {

		return usersFiltered.filter(user => user.name.toLowerCase().includes(find.toLowerCase())
		);
	}
	return usersFiltered;
}

const filterOption = ( option , usersFiltered ) => {

	if (option === '0') {
	
		return usersFiltered;

	  } else if (option === '1') {
	
		return [...usersFiltered].sort((a,b) => {

			if (a.name > b.name) return 1;
			if (a.name < b.name) return -1;
			return 0;
		});

	  }
}




export default MainPage;