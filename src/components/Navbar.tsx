import { Moon, ShapesIcon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hook/theme";

export default function Navbar() {
	const { resolvedTheme, toggleTheme } = useTheme();

	return (
		<div className="absolute  right-4 z-10 rounded-md px-4">
			<div className="flex items-center gap-1">
				<Button
					className="border-0 bg-transparent px-0.5"
					size="icon-lg"
					variant="link"
					onClick={toggleTheme}
				>
					{resolvedTheme === "dark" ? <Sun /> : <Moon />}
				</Button>

				<a
					href="https://github.com/amit4218/upload-dio"
					target="_blank"
					rel="noopener noreferrer"
				>
					<ShapesIcon size={20} />
				</a>
			</div>
		</div>
	);
}
