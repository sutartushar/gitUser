import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./CardComponent.css";
import { useGlobalContext } from "../context";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const CardComponent = () => {
  const { users, query, selectUsers } = useGlobalContext();

  // Filter users based on the search
  const filteredUsers = users.filter((user) =>
    user.login.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="cardContainer">
      <Grid container spacing={1}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((item) => {
            const { login, avatar_url, id } = item;
            return (
              <Grid item xs={12} sm={6} md={3} key={id}>
                <Card
                  sx={{ maxWidth: 345 }}
                  className="main_card"
                  onClick={() => selectUsers(id)}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={avatar_url}
                    alt="...thumbnail"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {login}
                    </Typography>
                    <Link to={`/users/${id}`}>
                      <Typography variant="body2" color="text.secondary">
                        View Details
                      </Typography>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            );
          })
        ) : (
          <Typography variant="body2" color="text.secondary">
            No users found.
          </Typography>
        )}
      </Grid>
    </div>
  );
};

export default CardComponent;
