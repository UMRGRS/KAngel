import { MachineResume } from "./machine-resume"

export interface MachineList {
    next?:string
    previous?:string
    results?:Array<MachineResume>
    error: string | null 
}
