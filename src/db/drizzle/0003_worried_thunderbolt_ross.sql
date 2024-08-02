ALTER TABLE "my_schema"."subscriber_codes" SET SCHEMA "public";
--> statement-breakpoint
ALTER TABLE "my_schema"."subscribers" SET SCHEMA "public";
--> statement-breakpoint
DROP SCHEMA "my_schema";
