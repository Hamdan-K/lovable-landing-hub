export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      professionals: {
        Row: {
          accepting_requests: boolean
          bio: string | null
          business_name: string
          categories: string[]
          city: string
          created_at: string
          id: string
          name: string
          owner_id: string | null
          price_band: string
          rating: number
          response_time: string | null
          review_count: number
          verified: boolean
        }
        Insert: {
          accepting_requests?: boolean
          bio?: string | null
          business_name: string
          categories?: string[]
          city: string
          created_at?: string
          id?: string
          name: string
          owner_id?: string | null
          price_band?: string
          rating?: number
          response_time?: string | null
          review_count?: number
          verified?: boolean
        }
        Update: {
          accepting_requests?: boolean
          bio?: string | null
          business_name?: string
          categories?: string[]
          city?: string
          created_at?: string
          id?: string
          name?: string
          owner_id?: string | null
          price_band?: string
          rating?: number
          response_time?: string | null
          review_count?: number
          verified?: boolean
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          city: string | null
          created_at: string
          display_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          city?: string | null
          created_at?: string
          display_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          city?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      repair_guides: {
        Row: {
          category: string
          created_at: string
          difficulty: string
          estimated_minutes: number
          id: string
          parts: Json
          published: boolean
          safety_level: string
          slug: string
          steps: Json
          summary: string
          title: string
          tools: Json
        }
        Insert: {
          category: string
          created_at?: string
          difficulty: string
          estimated_minutes: number
          id?: string
          parts?: Json
          published?: boolean
          safety_level?: string
          slug: string
          steps?: Json
          summary: string
          title: string
          tools?: Json
        }
        Update: {
          category?: string
          created_at?: string
          difficulty?: string
          estimated_minutes?: number
          id?: string
          parts?: Json
          published?: boolean
          safety_level?: string
          slug?: string
          steps?: Json
          summary?: string
          title?: string
          tools?: Json
        }
        Relationships: []
      }
      repair_requests: {
        Row: {
          created_at: string
          customer_id: string
          id: string
          message: string | null
          professional_id: string
          quote_amount: number | null
          repair_id: string
          status: Database["public"]["Enums"]["request_status"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          customer_id: string
          id?: string
          message?: string | null
          professional_id: string
          quote_amount?: number | null
          repair_id: string
          status?: Database["public"]["Enums"]["request_status"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          customer_id?: string
          id?: string
          message?: string | null
          professional_id?: string
          quote_amount?: number | null
          repair_id?: string
          status?: Database["public"]["Enums"]["request_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "repair_requests_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "repair_requests_repair_id_fkey"
            columns: ["repair_id"]
            isOneToOne: false
            referencedRelation: "repairs"
            referencedColumns: ["id"]
          },
        ]
      }
      repairs: {
        Row: {
          category: string
          created_at: string
          diagnosis: Json | null
          guide_id: string | null
          id: string
          item_name: string
          notes: string | null
          photo_paths: string[]
          progress: number
          status: Database["public"]["Enums"]["repair_status"]
          symptom: string
          updated_at: string
          user_id: string
        }
        Insert: {
          category: string
          created_at?: string
          diagnosis?: Json | null
          guide_id?: string | null
          id?: string
          item_name: string
          notes?: string | null
          photo_paths?: string[]
          progress?: number
          status?: Database["public"]["Enums"]["repair_status"]
          symptom: string
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: string
          created_at?: string
          diagnosis?: Json | null
          guide_id?: string | null
          id?: string
          item_name?: string
          notes?: string | null
          photo_paths?: string[]
          progress?: number
          status?: Database["public"]["Enums"]["repair_status"]
          symptom?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "repairs_guide_id_fkey"
            columns: ["guide_id"]
            isOneToOne: false
            referencedRelation: "repair_guides"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "customer" | "professional" | "admin"
      repair_status:
        | "draft"
        | "diagnosing"
        | "assessed"
        | "in_progress"
        | "completed"
      request_status:
        | "new"
        | "quoted"
        | "accepted"
        | "in_progress"
        | "completed"
        | "declined"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["customer", "professional", "admin"],
      repair_status: [
        "draft",
        "diagnosing",
        "assessed",
        "in_progress",
        "completed",
      ],
      request_status: [
        "new",
        "quoted",
        "accepted",
        "in_progress",
        "completed",
        "declined",
      ],
    },
  },
} as const
