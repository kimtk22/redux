import './App.css';
import {useState} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from '@mui/material';

function Header(){
  return(
    <header>
      <h1>welcome</h1>
    </header>
  );
}

function Nav(){
  return(
    <nav>
      <ol>
        <li><a href='/'>html</a></li>
        <li>css</li>
        <li>javascript</li>
      </ol>
    </nav>
  );
}

function Article(){
  const [open, setOpen] = useState(false);

  return(
    <article>
      <h1>Welcome</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend orci sem, quis tincidunt quam convallis tincidunt. Vestibulum tristique dignissim libero sed accumsan. Vivamus ante mi, molestie id fermentum sit amet, viverra sit amet neque. Vestibulum vestibulum lectus sit amet quam iaculis, id ullamcorper leo blandit. Curabitur lacinia quam at libero commodo tempus. Maecenas finibus ipsum urna, vel condimentum nisl auctor sed. Etiam nec pellentesque neque. Sed nunc nunc, consequat non sem vitae, viverra mattis diam.</p>
      <br />
      <ButtonGroup>
        <Button variant='outlined' onClick={() => {
          setOpen(true);
        }}>Create</Button>
        <Button variant='outlined'>Update</Button>
      </ButtonGroup>
      <ButtonGroup sx={{ml: 0.5}}>
        <Button variant='outlined'>Delete</Button>
      </ButtonGroup>
      <Dialog open={open}>
        <DialogTitle>Create</DialogTitle>
        <DialogContent>
          <DialogContentText>Hello Create!!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Create</Button>
          <Button onClick={() => {setOpen(false);}}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </article>
  );
}

function App() {
  return (
    <Container fixed>
      <Button variant='contained' href='/login'>login</Button>
      <Header></Header>
      <Grid container>
        <Grid item xs="2">
          <Nav></Nav>
        </Grid>
        <Grid item xs="8">
          <Article></Article>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
