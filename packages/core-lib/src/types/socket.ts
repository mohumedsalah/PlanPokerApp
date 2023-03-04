export enum socketEvent {
	VOTE = 'VOTE',
	JOIN_ROOM = 'JOIN_ROOM',
	REVERT_CARDS = 'REVERT_CARDS',
}

export enum socketListener {
	VOTED = 'VOTED',
	JOINED_ROOM = 'JOINED_ROOM',
	REVERTED_CARDS = 'REVERTED_CARDS',
}
