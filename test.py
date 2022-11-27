import hashlib

m = hashlib.sha256()
m.update(b"blah")
m.digest()
print(m.hexdigest())
