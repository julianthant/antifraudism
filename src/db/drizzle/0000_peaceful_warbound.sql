CREATE SCHEMA "my_schema";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "my_schema"."subscribers" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"email" text
);
