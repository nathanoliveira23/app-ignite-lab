import { CircleNotch } from "phosphor-react"

export function Loading() {
    return(
        <div className="flex items-center justify-center">
            <CircleNotch size={24} className="animate-spin" />
        </div>
    )
}