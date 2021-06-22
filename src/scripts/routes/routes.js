import Detail from '../views/pages/detail';
import ListRestaurant from '../views/pages/list-restaurant';
import Like from '../views/pages/like';

const routes = {
    '/': ListRestaurant, // default page
    '/list-restaurant': ListRestaurant,
    '/detail/:id': Detail,
    '/like': Like,
};

export default routes;