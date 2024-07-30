import colorsys

def hsl_to_hex(h, s, l):
    h = h / 360
    s = s / 100
    l = l / 100
    r, g, b = colorsys.hls_to_rgb(h, l, s)
    return '#{:02x}{:02x}{:02x}'.format(int(r * 255), int(g * 255), int(b * 255))

# Tailwind CSS color definitions
colors = {
    "background": (36, 39, 88),
    "foreground": (36, 45, 15),
    "primary": (36, 45, 70),
    "primary-foreground": (36, 45, 11),
    "secondary": (40, 35, 77),
    "secondary-foreground": (36, 45, 25),
    "accent": (36, 64, 57),
    "accent-foreground": (36, 72, 17),
    "destructive": (0, 84, 37),
    "destructive-foreground": (0, 0, 98),
    "muted": (36, 33, 75),
    "muted-foreground": (36, 45, 25),
    "card": (36, 46, 82),
    "card-foreground": (36, 45, 20),
    "popover": (0, 0, 100),
    "popover-foreground": (240, 10, 3.9),
    "border": (36, 45, 60),
    "input": (36, 45, 60),
    "ring": (36, 45, 30),
}

# Convert and print hex values
print("Material-UI theme color values:")
print("{")
for name, (h, s, l) in colors.items():
    hex_color = hsl_to_hex(h, s, l)
    print(f"  {name}: '{hex_color}',")
print("}")