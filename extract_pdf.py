import subprocess, sys, os

# Check which PDF library is available
lib = None
try:
    import fitz
    lib = "fitz"
except ImportError:
    try:
        import pdfplumber
        lib = "pdfplumber"
    except ImportError:
        try:
            import PyPDF2
            lib = "PyPDF2"
        except ImportError:
            lib = None

if lib is None:
    print("Installing pymupdf...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pymupdf"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    import fitz
    lib = "fitz"

pdf_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "notas_test.pdf")

if not os.path.exists(pdf_path):
    print(f"ERROR: File not found: {pdf_path}")
    sys.exit(1)

print(f"Using library: {lib}")
print(f"Reading: {pdf_path}")
print("=" * 80)

if lib == "fitz":
    doc = fitz.open(pdf_path)
    for i, page in enumerate(doc):
        text = page.get_text()
        print(f"\n--- PAGE {i+1} ---\n")
        print(text)
    doc.close()
elif lib == "pdfplumber":
    import pdfplumber
    with pdfplumber.open(pdf_path) as pdf:
        for i, page in enumerate(pdf.pages):
            text = page.extract_text()
            print(f"\n--- PAGE {i+1} ---\n")
            print(text if text else "[No text extracted]")
elif lib == "PyPDF2":
    import PyPDF2
    with open(pdf_path, "rb") as f:
        reader = PyPDF2.PdfReader(f)
        for i, page in enumerate(reader.pages):
            text = page.extract_text()
            print(f"\n--- PAGE {i+1} ---\n")
            print(text if text else "[No text extracted]")
