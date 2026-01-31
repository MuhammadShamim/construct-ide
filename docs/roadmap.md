This is the strategic roadmap for **CONSTRUCT**.

We are not just adding features; we are building a new language of interaction. This roadmap moves us from a "Toy" (v0.1) to a "Tool" (v1.0) and finally to a "Platform" (v2.0).

---

### **Phase 1: The Spark (Current Status)**

**Goal:** Prove the "No-File" Thesis.
**Version:** v0.1 (Pre-Alpha)

We have successfully built the "Hello World" loop. The engine exists. The UI is set.

* ✅ **Infinite Canvas:** React Flow v12 implementation.
* ✅ **The "Brain":** Zustand store for graph state.
* ✅ **Visual Protocol:** Cyan (Data) vs. Magenta (Logic).
* ✅ **The Compiler:** Basic `Input` -> `Output` traversal.

---

### **Phase 2: The Flow (Logic & Control)**

**Goal:** Turing Completeness.
**Timeline:** Next 2–4 Weeks

To be useful, Construct must handle logic, not just pass strings around. We need to introduce **Execution Flow** (the order things happen) separate from **Data Flow** (the values being passed).

#### **2.1. Math & Comparison Nodes**

* **MathNode:** One node that can toggle between Add, Subtract, Multiply, Divide.
* *Gamification:* The node pulses faster if the numbers are high.


* **LogicNode:** Greater Than, Less Than, Equals. Returns a boolean (Green/Red signal).

#### **2.2. The "If/Else" Splitter**

* This is the biggest challenge in visual coding.
* **The Switch Node:** Takes a Boolean input. Has *two* execution outputs: `True` (Top) and `False` (Bottom).
* **Visuals:** The "Execution Wire" lights up only on the path taken.

#### **2.3. The Inventory System (Drag & Drop)**

* Right now, we hardcode nodes in `initialNodes`.
* We need a **Radial Dock** or **Side Palette**. You drag a "Math Chip" from the dock and drop it onto the grid.

---

### **Phase 3: The Structure (Abstraction)**

**Goal:** Managing Complexity (The "Function" Concept).
**Timeline:** Month 2

If a user creates 100 nodes, the graph becomes a "Spaghetti Monster." We need to fix this with **Sub-Graphs**.

#### **3.1. The "Black Box" (Grouping)**

* **Feature:** Select 10 nodes -> Right Click -> "Encapsulate".
* **Result:** They shrink into a single "Function Node."
* **Interaction:** Double-clicking the Function Node "zooms in" (enters a new layer of the graph).
* **Metaphor:** It’s like entering a building in a city. You leave the "Street View" and enter the "Room View."

#### **3.2. Scope & Variables**

* Defining "Global" variables (accessible anywhere) vs. "Local" variables (only inside the Black Box).

---

### **Phase 4: The System (I/O & Persistence)**

**Goal:** Making it "Real" Software.
**Timeline:** Month 3

#### **4.1. The Transpiler (Graph to File)**

* We need a button: **"Export to Node.js"**.
* It walks the graph and generates a standard `index.js` file that you can actually run on a server.
* *Why?* This kills the argument "But I can't host visual code." Yes, you can. You just compile it.

#### **4.2. Local Storage / File System**

* Use the **File System Access API** (OPFS) so users can save their "Save Files" (Projects) to their hard drive.
* The project file format will be `.construct` (a compressed JSON).

---

### **Phase 5: The Ecosystem (v2.0)**

**Goal:** Multiplayer & Cloud.
**Timeline:** Future

* **Multiplayer:** Two cursors on the same graph. You wire the logic; I wire the UI.
* **The Marketplace:** Users can build a "User Auth Node," save it, and sell/share it. Other users drag it into their project and it just works.

---

### **Immediate Next Step for You**

We are currently at the transition from **Phase 1** to **Phase 2**.

The most high-value thing you can build next is **The Math Node**. It forces us to solve:

1. Multiple Inputs (A and B).
2. Dynamic updates (A + B = C).

**Would you like the code for a `MathNode.tsx` that handles addition/subtraction to kick off Phase 2?**