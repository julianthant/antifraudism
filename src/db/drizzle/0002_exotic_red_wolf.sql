CREATE TABLE IF NOT EXISTS "my_schema"."subscriber_codes" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text,
	"code" text
);
