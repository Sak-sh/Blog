import mongoose from 'mongoose';

const Connection = async (username, password) => {
    // const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.bjfwq.mongodb.net:27017,cluster0-shard-00-01.bjfwq.mongodb.net:27017,cluster0-shard-00-02.bjfwq.mongodb.net:27017/?ssl=true&replicaSet=atlas-13p84a-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
    const URL = `mongodb+srv://${username}:${password}@cluster0.zb9hscb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;