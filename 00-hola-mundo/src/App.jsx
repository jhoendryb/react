import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: false
    },
    {
        userName: 'pheralb',
        name: 'Pablo Hernandez',
        isFollowing: true
    },
    {
        userName: 'elonmusk',
        name: 'Elon Musk',
        isFollowing: false
    },
    {
        userName: 'vxnder',
        name: 'VanderHeart',
        isFollowing: true
    },
];
export function App() {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>{name}</TwitterFollowCard>
                ))
            }
        </section>
    );
}

{/* <TwitterFollowCard initialIsFollowing={true} userName='midudev'>
    Miguel Angel Duran
</TwitterFollowCard>
<TwitterFollowCard userName='pheralb'>
    Pablo Hernandez
</TwitterFollowCard>
<TwitterFollowCard userName='elonmusk'>
    Elon Musk
</TwitterFollowCard>
<TwitterFollowCard userName='vxnder'>
    VanderHeart
</TwitterFollowCard> */}