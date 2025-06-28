import React from 'react'
import PizzaCard from './PizzaCard'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PizzaList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = React.useState([])

  const fetchData = async () => {
    const apiUrl = 'https://api.github.com/users?per_page=10&page=1'

    try { 
      const response = await fetch(apiUrl)
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  };
      useEffect(() => {
    fetchData()
  }, []);

  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      padding: "10px",
    },
  };

  const handleOpenDetails = (username) => {
   navigate(`/menu/${username}`);
   
  };
  return (
    <div style={styles.container}>
      {users.map((user) => (
        <PizzaCard
          
          imgUrl={user.avatar_url}
          link={user.html_url}
          username={user.login}
          func={() => handleOpenDetails(user.login)}
        />
      ))}
    </div>
  )
}

export default PizzaList;