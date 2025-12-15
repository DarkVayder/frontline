"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { FiTrash2, FiCheckCircle } from "react-icons/fi";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface Subtask {
  id: number;
  text: string;
  done: boolean;
}

interface Todo {
  id: number;
  text: string;
  done: boolean;
  priority?: "low" | "medium" | "high";
  subtasks?: Subtask[];
}

export default function TodosPage() {
  const [todos, setTodos, ready] = useLocalStorage<Todo[]>("todos", []);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "done">("all");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");
  const [draggedId, setDraggedId] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const filtered = todos.filter(t =>
    filter === "all" ? true : filter === "active" ? !t.done : t.done
  );

  function addTodo() {
    if (!text.trim() || isAdding) return;

    setIsAdding(true);

    setTimeout(() => {
      setTodos([
        ...todos,
        { id: Date.now(), text, done: false, priority, subtasks: [] },
      ]);
      setText("");
      setIsAdding(false);
      toast.success("Task added");
    }, 300);
  }

  function removeTodo(id: number) {
    setTodos(todos.filter(t => t.id !== id));
    toast.info("Task removed");
  }

  function toggleTodo(id: number) {
    setTodos(todos.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function handleDragStart(id: number) {
    setDraggedId(id);
  }

  function handleDrop(targetId: number) {
    if (draggedId === null || draggedId === targetId) return;
    const newTodos = [...todos];
    const draggedIndex = newTodos.findIndex(t => t.id === draggedId);
    const targetIndex = newTodos.findIndex(t => t.id === targetId);
    const [draggedItem] = newTodos.splice(draggedIndex, 1);
    newTodos.splice(targetIndex, 0, draggedItem);
    setTodos(newTodos);
    setDraggedId(null);
  }

  if (!ready) {
    return (
      <main className="min-h-screen bg-gray-950 flex items-center justify-center">
        <p className="text-gray-400">Loading tasks…</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-12">
      <section className="w-full max-w-2xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-5 sm:p-8">
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Your Tasks
            </h1>
            <p className="mt-2 text-sm text-gray-400">Stay focused. Ship things.</p>
          </header>

          {/* Input */}
          <div className="flex flex-col sm:flex-row gap-3 text-white mb-4">
            <Input
              value={text}
              onChange={e => setText(e.target.value)}
              onKeyDown={e => e.key === "Enter" && addTodo()}
              placeholder="What needs to be done?"
              className="flex-1"
            />
            <select
              className="rounded-lg bg-gray-800 px-3 py-2 text-white cursor-pointer"
              value={priority}
              onChange={e => setPriority(e.target.value as any)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <Button
              label={isAdding ? "Adding..." : "Add Task"}
              onClick={addTodo}
              disabled={isAdding}
              className="
                cursor-pointer
                text-center
                w-full
                sm:w-auto
                sm:self-end
                px-6
                disabled:opacity-60
                disabled:cursor-not-allowed
                transition
              "
            />
          </div>

          {/* Filters */}
          <div className="mt-2 flex flex-wrap justify-center gap-2 mb-4">
            {(["all", "active", "done"] as const).map(f => (
              <Button
                key={f}
                label={f.charAt(0).toUpperCase() + f.slice(1)}
                variant={filter === f ? "primary" : "secondary"}
                onClick={() => setFilter(f)}
                className="cursor-pointer"
              />
            ))}
          </div>

          {/* Todo List */}
          <ul className="mt-4 space-y-3">
            {filtered.length === 0 && (
              <li className="rounded-xl border border-white/10 bg-white/5 p-6 text-center text-sm text-gray-400">
                No tasks here. Add one and move.
              </li>
            )}

            {filtered.map(todo => (
              <li
                key={todo.id}
                draggable
                onDragStart={() => handleDragStart(todo.id)}
                onDragOver={e => e.preventDefault()}
                onDrop={() => handleDrop(todo.id)}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:bg-white/10 cursor-pointer"
              >
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className={`flex h-6 w-6 items-center justify-center rounded-full border transition ${
                    todo.done
                      ? "border-green-400 bg-green-400 text-black"
                      : "border-gray-500 hover:border-white"
                  } cursor-pointer`}
                  aria-label="Toggle task"
                >
                  {todo.done && <FiCheckCircle size={16} />}
                </button>

                <div className="flex-1">
                  <span
                    className={`text-sm sm:text-base transition ${
                      todo.done
                        ? "text-gray-500 line-through"
                        : "text-gray-100 group-hover:text-white"
                    }`}
                  >
                    {todo.text}
                  </span>
                  {todo.priority && (
                    <span
                      className={`ml-2 text-xs px-1 rounded ${
                        todo.priority === "high"
                          ? "bg-red-500"
                          : todo.priority === "medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    >
                      {todo.priority}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => removeTodo(todo.id)}
                  className="rounded-lg p-2 text-gray-500 transition hover:bg-red-500/10 hover:text-red-400 cursor-pointer"
                  aria-label="Delete task"
                >
                  <FiTrash2 />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
