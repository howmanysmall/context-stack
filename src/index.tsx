//!nocheck
//!nolint
//!optimize 2

import React, { cloneElement } from "@rbxts/react";

export interface ContextStackProperties extends React.PropsWithChildren {
	readonly providers: ReadonlyArray<React.Element>;
}

export default function ContextStack({ children, providers }: ContextStackProperties): React.Element {
	let mostRecent: ReturnType<typeof cloneElement> | undefined = children as never;
	for (const providerIndex of $range(providers.size() - 1, 0, -1)) {
		const providerElement = providers[providerIndex];
		mostRecent = cloneElement(providerElement as never, undefined, mostRecent as never);
	}

	return mostRecent as never;
}
