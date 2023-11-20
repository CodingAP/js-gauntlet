# RazorHack CTF - JS Gauntlet Web Challenge

### by AP

### Writeup
https://codingap.github.io/blog/posts/razorhack-ctf/

## Challenges

### Challenge #1 - Where is Anything?
> I would give you a hint, but I don't think I see anything on this site.

The site is invisible, but the DOM is loaded, so looking through all the filler text will have the flag there

Flag: `flag{1nv1s1bl3_30948}`

### Challenge #2 - Password Validator
> Try logging in to the system with the username `razorpower`. Seems pretty simple...

The challenge will have a password validator client-side, which would see if the user put it the right password; however, the password has parts in all the code, so the user has to find it. The password will be from the code itself.

Flag: `flag{t00_m4ny_l3tt3r5_83201}`

### Challenge #3 - Button Maze
> Oooooo, this looks like one of the old style text-based RPGs. Why don't you try it?

Each site will have a North, South, East, West option, and you have to find the correct way. The correct way will be SSEEESSWWN. I intend them to find it by navigating it like the olden days of text-based RPGs.

MAZE:
```
+----------+
| X-+-+-+-o|
| | o | | o|
| +--+| | ||
|  O |+-+-+|
| o+-+    o|
+----------+
```

Flag: `flag{1t5_l1k3_a_c0rn_m4z3_32901}`

### Challenge #4 - Puzzle Pieces
> Have you ever tried a 100 piece puzzle? Those are fun. This may not be...

This is a 1000 piece puzzle that has very differently colored pieces. There is no way they are solving the puzzle manually (actually some one did so eh), so they have to simulate the keyboard to do the puzzle. Each piece tells where it is supposed to go, so you can solve it from there.

Flag: `flag{l0t5_0f_c0l0r5_s0rry_21023}`
