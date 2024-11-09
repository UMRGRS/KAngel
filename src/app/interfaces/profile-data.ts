export interface Profile {
    id?: number
    username?: string
    company?: Company
    error: string | null 
  }
  
  export interface Company {
    id?: number
    name?: string
    email?: string
    phone?: string
    logo_url?: string
  }
  