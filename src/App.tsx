import CreatePost from './components/CreatePost';
import TopBar from './components/TopBar';

export default function App() {
  return (
    <div>
      <TopBar />
      <main className="max-w-[1120px] mx-auto px-3">
        <div>
          <CreatePost />
        </div>
        <div>left</div>
      </main>
    </div>
  );
}
