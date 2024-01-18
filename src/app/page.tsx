import ActionBar from "@/components/ActionBar/ActionBar";
import Search from "@/components/Search/Search";

export default function Home() {
  return (
	<main className='w-full min-h-screen'>
		<ActionBar className="flex justify-between items-center gap-3 p-6 bg-white-50 dark:bg-gray-800">
			<Search/>
		</ActionBar>
	</main>
  )
}
