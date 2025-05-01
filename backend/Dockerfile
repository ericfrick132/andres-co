FROM mcr.microsoft.com/dotnet/sdk:8.0
WORKDIR /app

# Copy everything and restore dependencies
COPY . .
RUN dotnet restore

ENTRYPOINT ["dotnet", "watch", "run", "--urls", "http://0.0.0.0:80"] 