export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: number
          created_at: string
          nickname: string | null
          bio: string | null
          position: string[] | null
          genre: string[] | null
          experience_years: number | null
          portfolio_url: string | null
          avatar_url: string | null
          social_links: Json | null
          rating: number | null
          is_verified: boolean
          auth_provider: string | null
          provider_id: string | null
          updated_at: string
        }
        Insert: {
          id?: number
          created_at?: string
          nickname?: string | null
          bio?: string | null
          position?: string[] | null
          genre?: string[] | null
          experience_years?: number | null
          portfolio_url?: string | null
          avatar_url?: string | null
          social_links?: Json | null
          rating?: number | null
          is_verified?: boolean
          auth_provider?: string | null
          provider_id?: string | null
          updated_at?: string
        }
        Update: {
          id?: number
          created_at?: string
          nickname?: string | null
          bio?: string | null
          position?: string[] | null
          genre?: string[] | null
          experience_years?: number | null
          portfolio_url?: string | null
          avatar_url?: string | null
          social_links?: Json | null
          rating?: number | null
          is_verified?: boolean
          auth_provider?: string | null
          provider_id?: string | null
          updated_at?: string
        }
      }
      requests: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string
          created_at: string
          status: string
          category: string | null
          budget: number | null
          deadline: string | null
          attachments: Json[] | null
          views: number
          is_urgent: boolean
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description: string
          created_at?: string
          status?: string
          category?: string | null
          budget?: number | null
          deadline?: string | null
          attachments?: Json[] | null
          views?: number
          is_urgent?: boolean
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string
          created_at?: string
          status?: string
          category?: string | null
          budget?: number | null
          deadline?: string | null
          attachments?: Json[] | null
          views?: number
          is_urgent?: boolean
          updated_at?: string
        }
      }
      teamups: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string
          created_at: string
          status: string
          category: string | null
          required_positions: Json[] | null
          genre: string[] | null
          project_period: string | null
          location: string | null
          is_remote: boolean
          member_count: number
          max_member_count: number | null
          views: number
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description: string
          created_at?: string
          status?: string
          category?: string | null
          required_positions?: Json[] | null
          genre?: string[] | null
          project_period?: string | null
          location?: string | null
          is_remote?: boolean
          member_count?: number
          max_member_count?: number | null
          views?: number
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string
          created_at?: string
          status?: string
          category?: string | null
          required_positions?: Json[] | null
          genre?: string[] | null
          project_period?: string | null
          location?: string | null
          is_remote?: boolean
          member_count?: number
          max_member_count?: number | null
          views?: number
          updated_at?: string
        }
      }
    }
  }
} 