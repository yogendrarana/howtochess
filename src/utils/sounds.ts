export type SoundType = "move" | "capture" | "castle" | "check" | "illegal";

const soundPaths: Record<SoundType, string> = {
	move: "/sounds/move.mp3",
	capture: "/sounds/capture.mp3",
	castle: "/sounds/castle.mp3",
	check: "/sounds/check.mp3",
	illegal: "/sounds/illegal.mp3",
};

const audioElements: Partial<Record<SoundType, HTMLAudioElement>> = {};

export const playSound = (type: SoundType) => {
	if (typeof window === "undefined") return; // prevent SSR errors

	if (!audioElements[type]) {
		audioElements[type] = new Audio(soundPaths[type]);
	}

	const sound = audioElements[type];
	if (!sound) return;

	sound.currentTime = 0;
	sound.play().catch((err) => console.warn("Failed to play sound:", err));
};
