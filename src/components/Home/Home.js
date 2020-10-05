import React from 'react';
import Activity from '../Activity/Activity';
import Header from '../Header/Header';

const Home = () => {
    const activity = [
        { activityImage: "https://i.ibb.co/HnVgc1F/animal-Shelter.png", activityName: "Animal Shelter" },
        { activityImage: "https://i.ibb.co/qnQ3jD8/babySit.png", activityName: "Baby sit" },
        { activityImage: "https://i.ibb.co/SRDPYJP/bird-House.png", activityName: "Bird House" },
        { activityImage: "https://i.ibb.co/jJ6MJwj/child-Support.png", activityName: "Child Support" },
        { activityImage: "https://i.ibb.co/SvxNhFd/clean-Water.png", activityName: "Clean Water" },
        { activityImage: "https://i.ibb.co/3RWxdDy/clearn-Park.png", activityName: "Clear Park" },
        { activityImage: "https://i.ibb.co/26Zf16j/cloth-Swap.png", activityName: "Cloth Swap" },
        { activityImage: "https://i.ibb.co/fQ0bPpt/drive-Safety.png", activityName: "Drive Safety" },
        { activityImage: "https://i.ibb.co/fCDwmS1/vote-Register.png", activityName: "Vote Register" },
        { activityImage: "https://i.ibb.co/BNw1R2m/food-Charity.png", activityName: "Food Charity" },
        { activityImage: "https://i.ibb.co/5kXJbbn/good-Education.png", activityName: "Good Education" },
        { activityImage: "https://i.ibb.co/NKjQMd4/ITHelp.png", activityName: "IT Help" },
        { activityImage: "https://i.ibb.co/QfDdjjS/library-Books.png", activityName: "Library Books" },
        { activityImage: "https://i.ibb.co/hddzsbw/music-Lessons.png", activityName: "Music Lesson" },
        { activityImage: "https://i.ibb.co/tBFxksy/newBooks.png", activityName: "New Books" },
        { activityImage: "https://i.ibb.co/g7rcs6q/refuse-Shelter.png", activityName: "Refuse Shelter" },
        { activityImage: "https://i.ibb.co/M8kgZ2z/river-Clean.png", activityName: "River Clean" },
        { activityImage: "https://i.ibb.co/CzsZW5Q/school-Suffiles.png", activityName: "School Suffiles" },
        { activityImage: "https://i.ibb.co/VvYBnxy/study-Group.png", activityName: "Group Study" },
        { activityImage: "https://i.ibb.co/vJJWwqY/stuffed-Animals.png", activityName: "Stuffed Animal" },
    ]
    const background = [{
        image: "https://i.ibb.co/933kbY9/extra-Volunteer.png"

    }]

    return (
        <div>
            <Header></Header>
            {
                activity.map(activity => <Activity activity={activity}></Activity>)
            }

        </div>
    );
};

export default Home;