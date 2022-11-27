import hashlib

m = hashlib.sha256()
m.update("blah".encode('utf8'))
m.digest()
print(m.hexdigest())
