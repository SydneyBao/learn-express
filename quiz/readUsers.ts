import express, {Response } from 'express';
import { UserRequest } from './types';
const router = express.Router();
router.get('/read/usernames', (req: UserRequest, res: Response) => {
    const usernames = req.users?.map((user) => {
        return { id: user.id, username: user.username };
    });
    
    res.send(usernames);
});

router.get('/read/username/:name', (req: UserRequest, res: Response) => {
  let name = req.params.name;
  let users_with_name = req.users?.filter(function(user) {
    return user.username === name;
  })
  console.log(users_with_name);
  if (users_with_name?.length === 0) {
    res.send({
      error: {message:`${name} not found`, status: 404}
    })
  } else{
    res.send(users_with_name);
  }
})

export default router;