import profileImage from './assets/avatar.png'

// User data
const user = {
	name: 'Jessy Styles',
	avatarUrl: profileImage,
	registerDate: '10/31/2023',
	bio: 'Jessy is passionate about designing visually stunning and highly functional web applications, with code. She really enjoys using Tailwind.',
}

export default function UserProfile() {
	return (
		<div className="pb-20 pt-48">
			{/* 🐨 Change the card's background color to white */}
			<div className="mx-auto max-w-md overflow-auto rounded-3xl bg-slate-100 text-center shadow-lg ring-1 ring-slate-300">
				{/* 
					🐨 Wrap the `<header>` and `<p>{user.bio}</p>` below in a div. Then...

						1. Move the `margin-top` and `border-top` classes into the new parent wrapper.

						2. Add a top-to-bottom background-gradient to the parent wrapper. Make it fade to white at the bottom, and play around with the `from-` color to get a nice effect!

						It's up to you here — but a `slate-200` color at 75% opacity looks pretty nice ✨
				*/}
				<header className="mt-32 flex flex-col items-center border-t border-slate-300 px-8">
					<img
						src={user.avatarUrl}
						alt={`avatar for ${user.name}`}
						className="-mt-20 h-40 w-40 rounded-full object-cover shadow-lg ring-1 ring-slate-300 ring-offset-[6px]"
					/>
					<h1 className="mt-8 text-3xl text-slate-900">{user.name}</h1>
					<p className="mt-2 text-slate-500">Joined on {user.registerDate}</p>
				</header>
				<p className="text-pretty mt-8 px-8 text-lg text-slate-900">
					{user.bio}
				</p>
				<footer className="mt-16 border-t border-slate-300">
					<a
						href="#"
						className="block bg-white px-8 py-6 font-semibold text-slate-900 transition hover:bg-slate-100"
					>
						Read notes
					</a>
				</footer>
			</div>
		</div>
	)
}
