import Navbar from './components/Navbar'
import ProfileCard from './components/ProfileCard'
import Accordion from './components/Accordion'
import Interests from './components/Interests'
import AlertBox from './components/AlertBox'
import StatusInput from './components/StatusInput'
import PostCard from './components/PostCard'
import SidebarRight from './components/SidebarRight'
import { PostProvider } from './context/PostContext'

function App() {
  const posts = [
    {
      id: 1,
      author: 'John Doe',
      avatar: 'https://www.w3schools.com/w3images/avatar2.png',
      time: '1 min',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      images: [
        'https://www.w3schools.com/w3images/lights.jpg',
        'https://www.w3schools.com/w3images/nature.jpg'
      ]
    },
    {
      id: 2,
      author: 'Jane Doe',
      avatar: 'https://www.w3schools.com/w3images/avatar5.png',
      time: '16 min',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      images: []
    },
    {
      id: 3,
      author: 'Angie Jane',
      avatar: 'https://www.w3schools.com/w3images/avatar6.png',
      time: '32 min',
      content: 'Have you seen this?',
      images: ['https://www.w3schools.com/w3images/nature.jpg'],
      extraContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ]

  return (
    <PostProvider initialPosts={posts}>
    <div className="w3-theme-l5">
      <Navbar />

      <div className="w3-container w3-content" style={{ maxWidth: 1400, marginTop: 80 }}>
        <div className="w3-row">
          {/* Left Column */}
          <div className="w3-col m3">
            <ProfileCard />
            <br />
            <Accordion />
            <br />
            <Interests />
            <br />
            <AlertBox />
          </div>

          {/* Middle Column */}
          <div className="w3-col m7">
            <div className="w3-row-padding">
              <div className="w3-col m12">
                <StatusInput />
              </div>
            </div>

            {posts.map(({ id, ...rest }) => (
              <PostCard key={id} postId={id} {...rest} />
            ))}
          </div>

          {/* Right Column */}
          <SidebarRight />
        </div>
      </div>

      <br />

      {/* Footer */}
      <footer className="w3-container w3-theme-d3 w3-padding-16">
        <h5>Footer</h5>
      </footer>

      <footer className="w3-container w3-theme-d5">
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" rel="noopener noreferrer">w3.css</a></p>
      </footer>
    </div>
    </PostProvider>
  )
}

export default App
