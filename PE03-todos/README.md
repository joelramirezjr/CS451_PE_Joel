# Input

The user types a task into the input field that asks, "What needs to be done?" Once they’re ready, they tap the "Submit" button to add the task to their list. Each task that appears in the list comes with two buttons: one to mark it as “Done” and another to “Delete” it. There’s also a tab bar at the bottom of the screen with three options—All, Active, and Complete—so users can filter which tasks they want to see.

# Process

As the user types, their input gets updated in the app’s state and is console logged in the terminal. When they hit "Submit," the app creates a new todo item with a unique index, adds it to the list, clears the input box, and logs the updated state to the terminal. Users can tap "Done" to toggle whether a task is complete or not, and "Delete" to remove it from the list. The filter buttons at the bottom change what’s displayed by updating a `type` value in the state, which controls which todos are shown.

# Output

New tasks show up right under the input field with their own action buttons. Tapping "Done" marks the task as completed (with visual feedback), and tapping "Delete" removes it entirely. The filter bar lets users switch between seeing all tasks, just the ones still to do, or only the ones they've completed. Behind the scenes, the terminal logs everything—each keystroke in the input, every new task added, and any changes like completing or deleting a task—along with the full updated app state.
