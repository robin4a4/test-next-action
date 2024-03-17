"use server";
import fs from "fs";
import { revalidatePath } from "next/cache";

export async function addTodo(formData: FormData) {
  try {
    const currentTodosFile = await fs.readFileSync(
      `${process.cwd()}/app/todos.txt`
    );
    await fs.writeFileSync(
      `${process.cwd()}/app/todos.txt`,
      `${currentTodosFile}\n${formData.get("todo")}`
    );
  } catch (e: unknown) {
    console.log("error when adding todo", e);
  }
  revalidatePath("/");
}
