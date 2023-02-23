const express = require("express")
const app = express()
const port = 3000

// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

app.use(express.json())

// Express Routes
app.get('/users', async (req, res) => {
    res.send(users)
});

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    res.send(users[id]);
});

app.post('/users', (req, res) => {
    const newUser = req.body
    users.push(newUser)
    res.send(`User added: ${newUser.name}`)
})

app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    if (users[id]) {
      users[id] = updatedUser;
      res.send('User updated successfully');
    } else {
      res.status(404).send('User not found');
    }
  });

app.delete('/users/:id', (req, res) => {
    const id = req.params.id
    users.splice(id, 1)
    res.send(`User deleted`)
})

app.get('/fruits', async (req, res) =>{
    res.send(fruits)
})

app.get('/fruits/:id', async (req, res) => {
    const id = req.params.id;
    res.send(fruits[id]);
})

app.post('/fruits', (req, res) => {
    const newFruit = req.body
    fruits.push(newFruit)
    res.send(`Fruit added: ${newFruit.name}`)
})

app.put("/fruits/:index", (req, res) => {
    const index = req.params.index;
    const fruit = req.body;
    fruits[index] = fruit;
    res.send(`Fruit at index ${index} has been updated`);
  });

app.delete('/fruits/:id', (req, res) => {
    const id = req.params.id
    fruits.splice(id, 1)
    res.send(`Fruit deleted`)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});